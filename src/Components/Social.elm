module Components.Social exposing (..)

{- Imports -}
import Html exposing (..)
import Html.Events exposing (..)
import Html.Attributes exposing (..)

import Components.Link exposing (..)

renderSocialPanel : (Maybe (List Link)) -> Html msg
renderSocialPanel list =
  case list of
    Nothing ->
      (text "")

    Just links ->
      div [ class "project" ]
      [ h1 [] [ text "Social Media" ]
      , div [ class "social-media" ]
        (List.map renderLink links)
      ]
