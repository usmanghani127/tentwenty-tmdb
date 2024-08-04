# Getting Started

## Pre-requisite

This project was created using the following version of the development tools:
- Yarn: 1.22.19
- Node.js 18.16.0  (Recommended: Use nvm)
- Cocoapods: 1.14.2
- Ruby 3.2.2
- Xcode 15.3
- JDK 17 [OpenJDK distribution Azul Zulu](https://www.azul.com/downloads/#)
- Android Studio Koala | 2024.1.1 Patch 1
- NDK 25.1.8937393


## Running App
### Step 1: Installing dependency packages

Install React Native and Cocoapods dependencies using this command:


```bash
yarn install:all
```

### Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
yarn start
```

### Step 3: Start the Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

#### Debug Mode
```bash
yarn android
```

#### Release Mode
```bash
yarn android --mode release
```

### For iOS

#### Debug Mode
```bash
yarn ios
```

#### Release Mode
```bash
yarn ios --mode Release
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Generate APK, AAB, IPA:

#### Generate Release APK
```bash
yarn release:apk
```

#### Generate Release AAB
```bash
yarn release:aab
```

#### Generate IPA

- Open the xcode and select `Any iOS Device` from the devices list.
- Client `Product` -> `Archive` from the menu.


## Troubleshooting

If something goes wrong, please refer to the [React Native documentation](https://reactnative.dev/docs/environment-setup)

## Testing

For testing, this project uses Detox.

### For iOS

### Step 1: Install appsimutils
The `applesimutils` tool is required by Detox, install this by running the following command:

```bash
brew tap wix/brew
brew install applesimutils
```

### Step 2: Build the app

```bash
yarn detox:build:ios
```

### Step 3: Run the test cases

```bash
yarn detox:test:ios
```

### For Android

### Step 1: Setup enviroment variable
Detox relies on `ANDROID_SDK_ROOT` environment variable, which point to the Android SDK path.


### Step 2: Build the app

```bash
yarn detox:build:ios
```

### Step 3: Run the test cases

```bash
yarn detox:test:ios
```
