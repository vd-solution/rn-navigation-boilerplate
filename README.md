# rn-navigation-boilerplate

## Getting Started

1. Clone the repo
```bash
git clone https://github.com/vd-solution/rn-navigation-boilerplate.git new-project
```

2. Install packages
```bash
cd new-project
npm i
cd ios/ && pod install && cd ../
```

3. Rename the app using [react-native-rename](https://github.com/junedomingo/react-native-rename) if needed. If you do so, don't forget to run `cd ios/ && pod install && cd ../` when the process is finished. Also keep in mind that bundle identifier must be valid for both platforms or change it manually.

4. Run it!
```bash
react-native run-ios
react-native run-android
```
