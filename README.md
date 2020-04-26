# Insta Saved Parser // v.0.2.1

`!!` This parser made for non commercial use, just for fun, `use it for your own risk`.

# Idea

> The idea was to have my "Saved" posts literally on my computer for my personal use, without going for it every time in internet. Also I learned a lot of new things and technologies. 


*P.S. What I really liked, the layout web version of Instagram made with amazing creativity and extremely logically! It was very interesting to find the way how I can get this images out of there. That brougth me a lot of fun and experience. Thank you, Guys!*

  - Getting urls of high res versions of images you have in your collection
  - Code is very simple, you can almost see how the process runs in your chrome/mozilla developer tools
  - Process is fully automated you just need to run scripts (js in browser, py on terminal)

# New Features!

  - Downloading images to selected folder and with selected prefix
  - Even if current post isn't picture it will cause no errors
  - bash script to prepare folder structure for new content download

This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

### Tech

Dillinger uses a number of open source projects to work properly:

* [Vanilla Javascript] - For parsing image urls from HTML DOM
* [Python3.8 (urllib)] - For downloading images using urls I got from Website
* [Bash] - for folder structure and some processes

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### Usage

 	- First of all you need to run `get_pics_scroll.js` in your browser at your profile saved tab. You can set count of rows you want to copy and set row, where you want to start.
 	- After copying process finishes you need to run `pics_down.js` also in browser. Then you will become download request from your browser.
 	- Move urls_input.txt to scripts folder and run `insta_parser.py`. 
 	- Set prefix for image files, f.e. `imgs_` and wait for download.

```sh
$ ./ready_to_download.sh
$ ./insta_parser.py
```

### Todos

 - Write Tests
 - Add feature of getting all images in slides
