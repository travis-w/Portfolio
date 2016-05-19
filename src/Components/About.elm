module Components.About exposing (..)

{- Imports -}
import Html exposing (..)
import Html.Events exposing (..)
import Html.Attributes exposing (..)

import Components.Link exposing (..)
import Components.Panel exposing (..)

renderAboutPanel : (Maybe String) -> Html msg
renderAboutPanel about =
  case about of
    Nothing ->
      (text "")

    Just aboutMe ->
      panel "About" [ text aboutMe ]
