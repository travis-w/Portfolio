{- Imports -}
import Html exposing (..)
import Html.App as Html
import Html.Events exposing (..)
import Html.Attributes exposing (..)

import Components.Navigation as Navigation exposing (..)
import Components.Project exposing (..)


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
      "Testing"

test : Project
test = { title = "TESTING"
       , description = "Test test"
       , tools = ["Elm", "Test"]
       , links = [{ title = "Link", url = "http://thetravisw.com" }]
       }

test2 : Project
test2 = { title = "TESTING"
       , description = "Test test"
       , tools = ["Elm", "Test"]
       , links = [{ title = "Link", url = "http://thetravisw.com" }]
       }

pList : ProjectPage
pList = { title = "Projects"
        , projects = [test, test2]
        }

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
    , (renderPage pList)
    ]
