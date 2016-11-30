# Rails ReactNative Redux Sample

This is Rails + ReactNative + Redux sample.

**Structure**

- API: [Rails](https://github.com/rails/rails) v5 API mode
- App: [ReactNative](https://github.com/facebook/react-native) + [Redux](https://github.com/reactjs/redux) + [redux-saga](https://github.com/yelouafi/redux-saga) + [ReactNativeRouterFlux](https://github.com/aksonov/react-native-router-flux)

## Usage

1. `git clone https://github.com/kouhei-fuji/rails-react-native-redux-sample.git && cd rails-react-native-redux-sample`
1. `bundle install && bin/rails db:create db:migrate db:seed`
1. `npm install`
1. iOS: `npm run ios`
1. Android: `npm run android` (WIP)

## Redux State

This app includes [Remote Redux DevTools](https://github.com/zalmoxisus/remote-redux-devtools).
You can see change flow of redux state on [your browser](http://remotedev.io/local/) or [another way](https://github.com/zalmoxisus/remote-redux-devtools#monitoring).

## License

This library is under the [MIT License](https://opensource.org/licenses/MIT).
