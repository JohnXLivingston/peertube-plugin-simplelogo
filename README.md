# PeerTube simple logo plugin

Main repository: https://framagit.org/Livingston/peertube-plugin-simplelogo.

Clone repository: https://github.com/JohnXLivingston/peertube-plugin-simplelogo.


## Introduction

This plugin allows you to configure an alternative logo and favicon for your peertube instance.

For now, you have to host the files by your own.

## How to

Once you have installed the plugin, go to the plugin's setup page.
There are several fields.

- Icon url (optionnal): if you want to change the logo icon (on the top left of your instance). Put here the url of your file. You have to host this file by your own.
- Icon width: if your icon file is not the same width that the original peertube logo, you can specify here the width. For example: "24px".
- Favicon url: if you want to change the favicon, put here the url of your file. You have to host it by your own. Make sure it is a suitable file for a favicon.

**Important Note:** There is no sanitarization for your inputs (neither url or width). We assume that administrators are not evil, and don't do XSS and co.

## Upcoming enhancements

The actual method is not quite good. We have to wait the response of a peertubeHelpers.getSettings() before we can override logo or favicon.
I plan to find a better way.

Later, I planned to let you upload a file, automaticaly resize it and store it.
