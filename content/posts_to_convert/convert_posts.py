import os
import shutil
import markdown
import io
import urllib2
import requests

from markdown.treeprocessors import Treeprocessor
from markdown.extensions import Extension

class ImgExtractor(Treeprocessor):
  def run(self, doc):
    "Find all images and append to markdown.images"
    self.markdown.images = []
    for image in doc.findall('.//img'):
      self.markdown.images.append(image.get('src'))

class ImgExtExtension(Extension):
  def extendMarkdown(self, md, md_globals):
    img_ext = ImgExtractor(md)
    md.treeprocessors.add('imgext', img_ext, '>inline')

def getImages(post, filepath):
  print '  getting images for ' + post

  md = markdown.Markdown(extensions=[ImgExtExtension()])
  postdata = io.open(post, "r", encoding="utf-8").read()
  html = md.convert(postdata)
  print md.images

  try: 
    for img_url in md.images:
      req = requests.get(img_url, allow_redirects=True)
      if req.headers['Content-Type'].startswith('image'):
        filename = os.path.split(img_url)[1]
        open(filepath + "/" + filename, 'wb').write(req.content)
        print '  downloaded ' + filename + ' to ' + filepath
        postdata = postdata.replace(img_url, filename)

  except Exception as e:
    print "ran into exception while downloading image, " + str(e)

def main():
  print("\n> starting conversion")

  cwd = os.getcwd()
  posts = os.listdir(cwd)
  convertedFilePath = cwd + "/converted"

  if os.path.exists(convertedFilePath):
    print "> deleting converted folder"
    try:
      shutil.rmtree(convertedFilePath)
    except OSError as e:
        print ("Error: %s - %s." % (e.filename, e.strerror))
    print "> converted folder deleted"

  print "> making converted folder"
  os.makedirs(convertedFilePath)

  for post in posts:
    if post.endswith('.markdown'):
      filename = post[11:-9]
      filepath = convertedFilePath + "/" + filename
      filepathext = filepath + "/index.md"
      os.makedirs(filepath)
      shutil.copy2(cwd + "/" + post, filepathext)
      getImages(post, filepath)
      print ("   converted " + filename)

  print "> completed"

main()