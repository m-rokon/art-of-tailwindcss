# Art of TailwindCSS :wave:

## Welcome all :point_right:
Here you will learn all the topics of the TailwindCSS and hopefully you will be mastered on the TailwindCSS. I will be happy to teach you all you need to know about TailwindCSS. So let's dive in. :wink:

## TailwindCSS install :point_down:

Install TailwindCSS with `postcss` and `autoprefixer`

```sh
npm install -D tailwindcss postcss autoprefixer
```

Now lets create both `tailwind.config.js` and `postcss.config.js`

```sh
npx tailwindcss init --postcss
```

After that lets create `tailwind.css` a genarel CSS file and place there these directives

```sh
@tailwind base;
@tailwind components;
@tailwind utilities;
```

and then lets modify the `tailwind.config.js` file with the following code (remember to edit it according to your project's source files and directories)

```sh
content: ["./src/**/*.{html,js}"],
```

Finally, lets write a script to watch the css file (remember to edit it according to your project's source files and directories)

```sh
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

And last but not least! Don't forget to add your css file to your `index.html` or whatever html file it is :sweat_smile: