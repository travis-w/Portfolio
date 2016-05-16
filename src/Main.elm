{- Imports -}
import Html exposing (..)
import Html.App as Html
import Html.Events exposing (..)
import Html.Attributes exposing (..)

import Components.Navigation as Navigation exposing (..)


main =
  Html.beginnerProgram { model = "Test", view = view, update = update }

type Action
  = SwitchPage Int
  | HidePage Int

update : Action -> String -> String
update msg model =
  case msg of
    SwitchPage value ->
      "About"
    HidePage value ->
      "Tewsting"

view : String -> Html Action
view model =
  div [ class "portfolio" ]
    [ div [ class "logo" ] []
    , ul [ class "navigation" ]
      [ li [] [ span [ class "nav-link", ( onClick (SwitchPage 1) ) ] [text "Projects" ] ]
      , Navigation.item "Experience"
      , Navigation.item "Social Media"
      , Navigation.item "About"
      ]
    , div [] [text model]
    ]
