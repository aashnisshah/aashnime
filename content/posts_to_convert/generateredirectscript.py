import os
import shutil
import markdown
import io
import urllib2

def main():
  print("\n> starting conversion")

  cwd = os.getcwd()
  posts = os.listdir(cwd)
  oldBlogPathHttp = "http://blog.aashni.me/"
  oldBlogPathHttps = "https://blog.aashni.me/"
  newBlogPath = "https://aashni.me/blog/"
  
  f = open('redirect.txt', 'w+')
  for post in posts:
    if post.endswith('.markdown'):
      slug = post[11:-9]
      year = post[0:4]
      month = post[5:7]
      line = year + '/' + month + '/' + slug + ' ' + newBlogPath + slug + ' 301\n'
      f.write(oldBlogPathHttp + line)
      f.write(oldBlogPathHttps + line)
  
  f.close()

  print "> completed"

main()


# converting from http://blog.aashni.me/2018/01/making-maps-with-googles-map-api/ to https://aashni.me/blog/making-maps-with-googles-map-api/
