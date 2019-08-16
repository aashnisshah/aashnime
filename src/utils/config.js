import {
  AboutComponent,
  BlogComponent,
  ContactComponent,
  HomeComponent,
  PressComponent,
  SpeakingComponent,
  WorkComponent
} from "../components";

const NavigationLinks = [
  {
    title: "Home",
    link: "/",
    component: HomeComponent
  },
  {
    title: "Work",
    link: "/work",
    component: WorkComponent
  },
  {
    title: "About",
    link: "/about",
    component: AboutComponent
  },
  {
    title: "Speaking",
    link: "/speaking",
    component: SpeakingComponent
  },
  {
    title: "Press",
    link: "/press",
    component: PressComponent
  },
  {
    title: "Blog",
    link: "/blog",
    component: BlogComponent
  },
  {
    title: "Contact",
    link: "/contact",
    component: ContactComponent
  }
];

export { NavigationLinks };
