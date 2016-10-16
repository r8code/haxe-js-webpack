### Haxe js with webpack for hot reload

simple Hello world setting

## Dependencies
- haxe-watchify
- webpack

## Usage

- npm install haxe-watchify -g
- npm install 

 then open two terminal 

first terminal:

- haxe-watchify --program haxe --hxml build.hxml

second terminal:

- npm run watch

Open localhost:8080  then try editing Main.hx to see hot reload

TODO:
- resolve source map generated by webpack to haxe
