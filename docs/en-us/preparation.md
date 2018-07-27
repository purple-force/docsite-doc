## Preparation

After successfully installing `docsite`,go to the project root directory and execute `docsite init`. The generated directory is as follows:


```
|-- Project root
    |-- .babelrc
    |-- .docsite
    |-- .eslintrc
    |-- .gitignore
    |-- README.md
    |-- gulpfile.js
    |-- index.html
    |-- package-lock.json
    |-- package.json
    |-- webpack.config.js
    |-- blog
    |   |-- en-us
    |   |   |-- blog1.md
    |   |   |-- blog2.md
    |   |   |-- blog3.md
    |   |   |-- blog4.md
    |   |   |-- blog5.md
    |   |   |-- blog6.md
    |   |   |-- blog7.md
    |   |-- zh-cn
    |       |-- blog1.md
    |       |-- blog2.md
    |       |-- blog3.md
    |       |-- blog4.md
    |       |-- blog5.md
    |       |-- blog6.md
    |       |-- blog7.md
    |-- docs
    |   |-- en-us
    |   |   |-- demo1.md
    |   |   |-- demo2.md
    |   |   |-- dir
    |   |   |   |-- demo3.md
    |   |   |-- img
    |   |       |-- brhtqqzh.jpeg
    |   |-- zh-cn
    |       |-- demo1.md
    |       |-- demo2.md
    |       |-- dir
    |       |   |-- demo3.md
    |       |-- img
    |           |-- brhtqqzh.jpeg
    |-- img
    |   |-- alibaba.png
    |   |-- alibaba_hover.png
    |   |-- architecture.png
    |   |-- brhtqqzh.jpeg
    |   |-- documents.png
    |   |-- dubbo.ico
    |   |-- dubbo_colorful.png
    |   |-- dubbo_gray.png
    |   |-- dubbo_white.png
    |   |-- feature_hogh.png
    |   |-- feature_loadbalances.png
    |   |-- feature_maintenance.png
    |   |-- feature_runtime.png
    |   |-- feature_service.png
    |   |-- feature_transpart.png
    |   |-- issue.png
    |   |-- mailinglist.png
    |   |-- mailinglist_hover.png
    |   |-- pullrequest.png
    |   |-- quick_start.png
    |   |-- segmentfault.png
    |   |-- segmentfault_hover.png
    |   |-- users_alibaba.png
    |   |-- weibo.png
    |   |-- weibo_hover.png
    |   |-- system
    |       |-- arrow_down.png
    |       |-- arrow_right.png
    |       |-- blog.png
    |       |-- community.png
    |       |-- docs.png
    |       |-- docs_hover.png
    |       |-- docs_normal.png
    |       |-- menu_gray.png
    |       |-- menu_white.png
    |       |-- next.png
    |       |-- prev.png
    |-- md_json
    |   |-- blog.json
    |   |-- docs.json
    |-- site_config
    |   |-- blog.js
    |   |-- community.jsx
    |   |-- docs.js
    |   |-- home.jsx
    |   |-- site.js
    |-- src
    |   |-- index.jsx
    |   |-- index.scss
    |   |-- markdown.scss
    |   |-- variables.scss
    |   |-- components
    |   |   |-- bar
    |   |   |   |-- index.jsx
    |   |   |   |-- index.scss
    |   |   |-- footer
    |   |   |   |-- index.jsx
    |   |   |   |-- index.scss
    |   |   |-- header
    |   |   |   |-- index.jsx
    |   |   |   |-- index.scss
    |   |   |-- language
    |   |   |   |-- index.jsx
    |   |   |-- pageSlider
    |   |   |   |-- index.jsx
    |   |   |   |-- index.scss
    |   |   |-- sidemenu
    |   |   |   |-- index.jsx
    |   |   |   |-- index.scss
    |   |   |   |-- item.jsx
    |   |   |-- slider
    |   |       |-- index.jsx
    |   |       |-- index.scss
    |   |-- pages
    |       |-- blog
    |       |   |-- blogItem.jsx
    |       |   |-- blogItem.scss
    |       |   |-- index.jsx
    |       |   |-- index.scss
    |       |-- blogDetail
    |       |   |-- index.jsx
    |       |   |-- index.scss
    |       |-- community
    |       |   |-- contactItem.jsx
    |       |   |-- contributorItem.jsx
    |       |   |-- ecoItem.jsx
    |       |   |-- eventCard.jsx
    |       |   |-- index.jsx
    |       |   |-- index.scss
    |       |-- documentation
    |       |   |-- index.jsx
    |       |   |-- index.scss
    |       |-- home
    |           |-- featureItem.jsx
    |           |-- index.jsx
    |           |-- index.scss
    |-- utils
        |-- index.js
 ```
 
 Now let's have a brief introduction to the main files and folders from up and down.
 
 ### .docsite
 
An empty file that is used to determine if the current project has been initialized.
 
 ### index.html
 
The hosting page of the project.
 
 ### blog
 
 The directory of the markdown document and related image resources of the blog ,which has two directories, for Chinese and English.
 
  ### docs
 
 The directory of the markdown document and related image resources of the docs ,which has two directories, for Chinese and English.
 
 ### img
 
 Store some images of site that are not used by markdown, where `system` stores some business-independent images.
 
 ### md_json
 
 Store the json file of parseing result of the markdown document.
 
 ### site_config
 
 Store Chinese and English configuration data for the entire site, where `site.js` configures some global data, including the top menu and the bottom footer portion. `home.jsx`, `docs.js`, `blog.js`, `community.jsx` correspond to the configuration of the home page, document page, blog list page, and community page respectively.
 
 ### src
 
 The location where the source code is stored, where `index.jsx` is the main entry file, `markdown.scss` stores the style file for the markdown document, `variable.scss` stores the public scss variable, `components` stores the public component, and `pages` stores the different pages of the site, `utils` stores some public methods.
 
 Now that the skeleton of the website is set up, you can customize the content and fill in the content.
