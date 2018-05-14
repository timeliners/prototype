# Timeliners

[![Latest Release](https://img.shields.io/github/release/timeliners/prototype/all.svg?style=flat-square)](https://github.com/timeliners/prototype/releases)
[![Build Status](https://img.shields.io/travis/timeliners/prototype.svg?style=flat-square)](https://travis-ci.org/timeliners/prototype)

A "developers dashboard" for fun.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

## Structure

The application consists of multiple React components, all separated into their respective folders. 
Throughout the project, the [component folder pattern](https://medium.com/styled-components/component-folder-pattern-ee42df37ec68) is used to allow proper separation of concerns and bundling of tests.

```
/src
    /components
    /modules
    /providers
    /resources
```

### Components

These components are intended for reuse across multiple scenes. 
All files are divided into categories, e.g., text or form. 
If a component is only used in a single scene, it should be placed in that scene folder.

### Modules

Modules, also known as containers or scenes, are used as groups of different types of isolated parts of the app.
These folders may contain scenes or containers, but also components which have a one-time use. 
Also, GraphQL queries may also be placed here to assist in fetching the proper data.

> The name "features" is also used in the open source community. 
> But to avoid possible confusion with conventional commit feature type, a more distinctive name was chosen.

### Providers

A provider is a bootstrapper to initialize an (external) dependency, e.g., router or HTTP libraries. 
All configuration must be preloaded in these providers and exported without the need for additional configuration. 

### Resources

Resources are static files usually consisting of only data and no logic, e.g., images, fonts or JSON data. 
They should be imported from either components or scenes.
