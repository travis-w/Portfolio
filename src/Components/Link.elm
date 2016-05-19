module Components.Link exposing (..)

{- Imports -}
import Html exposing (..)
import Html.Events exposing (..)
import Html.Attributes exposing (..)

type alias Link =
  { title : String
  , url : String
  , glyphicon : Maybe String
  }

renderLink : Link -> Html msg
renderLink l =
  case l.glyphicon of
    Nothing ->
      -- Regular Link
      li []
      [ a [ href l.url, target "_blank" ] [ text l.title ] ]

    Just glyph ->
      -- Social Media Link
      a [ href l.url, title l.title, target "_blank" ]
      [ span [ class ("social " ++ glyph) ] [] ]
