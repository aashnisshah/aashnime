---
author: Aashni
comments: true
date: 2018-04-02 00:48:58+00:00
description: Ember transformations are extremely powerful! Here's how I used one to transform birthday's and dates
layout: post
link: https://aashni.me/blog/the-power-of-ember-transforms/
slug: the-power-of-ember-transforms
title: The Power of Ember Transforms
wordpress_id: 445
categories:
  - Ember
  - Frontend
  - Javascript
  - Tutorial
  - Web Development
---

This past week, I was introduced to the concept of `transforms` in [EmberJS](https://guides.emberjs.com/v3.0.0/models/defining-models/), and I was completely fascinated by them. In essence, transforms are a way to store and display data in a way that makes sense.

## Basic Model Attributes

In Ember, data displayed on a page is managed in a model. Here's a quick example of a model containing information about a person, stored in `app/model/person.js`.

```javascript
    import DS from 'ember-data';

    export default DS.Model.extend({
      firstName: DS.attr(),
      lastName: DS.attr(),
      birthday: DS.attr(),
      isBirthday: DS.attr(),
      birthdayMessage: Ember.computed.fn('firstName', 'birthday', 'isBirthday', function(firstName, birthday, isBirthday) {
        if(isBirthday) {
            return 'It\'s ' + firstName + '\s' birthday today!';
        }
        return firstName + "'s birthday is on " + birthday;
      })
    });
```

The `firstName`, `lastName`, `birthday` and `isBirthday` are attributes that have been loaded from the server. Ember uses the `DS.attr()` as a way to call the data from the data store, and since there are no arguments being passed to the `DS.attr()`, we display the data as is. The `birthdayMessage` attribute is a computed property that uses the `firstName` and `birthday` attributes to create a message output.

## Basic Data Transforms

Sometimes our server and website logic drifts, and the data we get from our server is in a format we don't quite expect. For example, we're currently expecting the `isBirthday` value to be a true or false value - what would happen if we using `f` instead of `false`? Enter, `transforms`, a way of using simple `serialize` and `deserialize` methods that can be run on attribute values to make sure they conform to minimum data type requirements.

By default, there are four types available; `string`, `number`, `boolean`, and `date`. If we apply the string and date transforms to our earlier example, we get the following code which explicitly expects `firstName` and `lastName` to be strings, and `birthday` to be an ISO 8601 string that converts into a date object. `isBirthday` will now be a boolean value, and will accept any of `true` and `t` (any case), or `1` as `true`, and everything else would be considered `false`. I threw an extra `defaultValue` option which sets `isBirthday` to false anytime we get a value we don't understand, or no value.

```javascript
    import DS from 'ember-data';

    export default DS.Model.extend({
      firstName: DS.attr('string'),
      lastName: DS.attr('string'),
      birthday: DS.attr('date'),
      isBirthday: DS.attr('boolean', {defaultValue: false}),
      birthdayMessage: Ember.computed.fn('firstName', 'birthday', 'isBirthday', function(firstName, birthday, isBirthday) {
        if(isBirthday) {
            return 'It\'s ' + firstName + '\s' birthday today!';
        }
        return firstName + "'s birthday is on " + birthday;
      })
    });
```

## Custom Transforms

The four generic transform options are great, but the real power of transforms comes with our ability to create custom transforms. Imagine our app is extremely famous and gets recognized all around the world. Yay! But then we start getting reports that have birthday messages not being displayed on the right date. After some investigation, we realize there's confusion over whether a birthday on `01/02/1992` is `January 2nd` or `February 1st` since some countries read their dates as `mm/dd/yyyy`, while others read it as `dd/mm/yyyy`. This obviously caused a lot of confusion for everyone. Instead, we can make use of the a custom transform that would display the date in the format expected in a specific region.

Custom transforms have a `serialize` and `deserialize` method that you can use to make transformations to the data. The `serialize` method would transform data going to the server, in this case if a new user signed up, we'd collect their birthday in their local format, but specifically store them in the server as `mm/dd/yyyy`. When reading the data back from the server, the `deserialize` function would convert it back into the regional format. Here's an example from `app/transforms/birthday.js`:

Note: for the purposes of this example, let's assume that `getLocalDateFormat()` returns either `mm/dd` or `dd/mm` depending on the country, and `convertDate(date, format)` takes the provided date value and converts it to the provided format. The `convertDate` method could be written using string splicing, regex, or preferable by making use of a tool like [moment](https://momentjs.com/).

```javascript
    import DS from 'ember-data';

    export default DS.Transform.extend({
      deserialize(mmddDate) {
        let localFormat = getLocalDateFormat();]
        return convertDate(mmddDate);
      },

      serialize(localizedDate) {
        let localFormat = getLocalDateFormat();
        return convertDate(localizedDate, 'mm/dd');
      }
    });
```

Note that in order for this transform to work, you'd have to update the transform value being passed in the model attribute. In other words, change `birthday: DS.attr('date')` to `birthday: DS.attr('birthday')` so that Ember picks up the correct transform serializer and deserializers.

```javascript
    import DS from 'ember-data';

    export default DS.Model.extend({
      firstName: DS.attr('string'),
      lastName: DS.attr('string'),
      birthday: DS.attr('birthday'),
      isBirthday: DS.attr('boolean', {defaultValue: false}),
      birthdayMessage: Ember.computed.fn('firstName', 'birthday', 'isBirthday', function(firstName, birthday, isBirthday) {
        if(isBirthday) {
            return 'It\'s ' + firstName + '\s' birthday today!';
        }
        return firstName + "'s birthday is on " + birthday;
      })
    });
```

And that's it. Now the date format will always display the date in the localized format, while storing it in a consistent format for the server to use. This is all happening right before we send data to or receive data from the server, which means we can reuse and update the `birthday` attribute throughout our codebase, and it will stay consistent everywhere.

With great power, comes great responsibility. Go forth and make responsible, but powerful `transforms`!
