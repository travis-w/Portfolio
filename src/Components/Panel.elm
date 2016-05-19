module Components.Panel exposing (..)

{- Imports -}
import Html exposing (..)
import Html.Attributes exposing (..)

panel : String -> List (Html a) -> (Html a)
panel title insides =
  div [ class "project" ]
  ( List.append [ h1 [] [ text title ] ] insides )
