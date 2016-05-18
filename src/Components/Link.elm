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
