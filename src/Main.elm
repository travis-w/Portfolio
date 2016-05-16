{- Imports -}
import Html exposing (..)
import Html.App as Html
import Html.Events exposing (..)
import Html.Attributes exposing (..)


main =
  Html.beginnerProgram { model = 0, view = view, update = update }

type Msg = Increment | Decrement

update msg model =
  0

view model =
  div [ class "portfolio" ]
    [ div [ class "logo" ] []
    , ul [ class "navigation" ]
      [ li [] [ span [ class "nav-link" ] [ text "Projects" ] ]
      , li [] [ span [ class "nav-link" ] [ text "Experience" ] ]
      , li [] [ span [ class "nav-link" ] [ text "Social Media" ] ]
      , li [] [ span [ class "nav-link" ] [ text "About" ] ]
      ]
    ]
