module Components.Navigation exposing (..)

{- Imports -}
import Html exposing (..)
import Html.Events exposing (..)
import Html.Attributes exposing (..)

item : String -> Html msg
item title =
  li
    []
    [ span [ class "nav-link" ] [ text title ] ]
