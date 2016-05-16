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
      [ li [] [ text "Projects" ]
      , li [] [ text "Experience" ]
      , li [] [ text "Social Media" ]
      , li [] [ text "About" ]
      ]
    ]
