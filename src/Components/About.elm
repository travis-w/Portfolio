module Components.About exposing (..)

{- Imports -}
import Html exposing (..)
import Html.Events exposing (..)
import Html.Attributes exposing (..)

import Components.Link exposing (..)

renderAboutPanel : (Maybe String) -> Html msg
renderAboutPanel about =
  case about of
    Nothing ->
      (text "")

    Just aboutMe ->
      div [ class "project" ]
      [ h1 [] [ text "About" ]
      , text aboutMe
      ]
