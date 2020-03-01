# Qlone

A tool to quickly clone git repos from slugs.

## Installation

```sh
deno install --allow-run https://x.fabs.dev/qlone/mod.js
```

## Usage

```sh
$ qlone [SLUG] [TARGET_DIR?] [-lab?]
  
  qlone v1
  created by Ian Fabs<ian@fabs.dev>

  [SLUG]                     The slug of the repo to clone (i.e the 'denoland/deno' portion of 'https://github.com/denoland/deno')
  [TARGET_DIR](optional)     Change the name of the repository folder being cloned
  [-lab](optional)           Clone from gitlab instead of github.
```
