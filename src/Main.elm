{- Imports -}
import Html exposing (..)
import Html.App as Html
import Html.Events exposing (..)
import Html.Attributes exposing (..)
import Array exposing (..)

import Components.Navigation as Navigation exposing (..)
import Components.Project exposing (..)
import Components.Experience exposing (..)
import Components.Page exposing (..)

-- Type Alias for Page
type alias Model =
  { pages : Array Page
  , activePage : Int
  }

initModel : Model
initModel =
  { pages = fromList [pList, experience]
  , activePage = -1
  }
-- MAIN
main =
  Html.beginnerProgram { model = initModel, view = view, update = update }

-- UPDATE
update : Int -> Model -> Model
update msg model =
  let
    newPage =
      if msg == model.activePage then
        -1
      else
        msg
  in
    { model | activePage = newPage }

-- Test Data
test : Project
test = { title = "TESTING"
       , description = "Test test"
       , tools = ["Elm", "Test"]
       , links = [{ title = "Link", url = "http://thetravisw.com", glyphicon = Nothing }]
       }

test2 : Project
test2 =
  { title = "TESTING"
  , description = "Test test"
  , tools = ["Elm", "Test"]
  , links = [{ title = "Link", url = "http://thetravisw.com", glyphicon = Nothing }]
  }

pList : Page
pList = { title = "Projects"
        , projects = Just [test, test2]
        , languages = Nothing
        , frameworks = Nothing
        , jobs = Nothing
        , aboutMe = Nothing
        , links = Nothing
        }

experience : Page
experience =
  { title = "Experience"
  , languages = Just ["HTML", "CSS", "JavaScript", "SQL", "PHP", "C++", "ASP.NET", "C#", "Python"]
  , frameworks = Just ["Bootstrap", "ReactJS", "AngularJS", "NodeJS", "Knockout", "ExpressJS", "jQuery"]
  , jobs = Just [
     { employer = "Nucor-Yamato Steel"
     , title = "Systems Analyst Intern"
     , startDate = "May 2014"
     , endDate = "January 2015"
     , description = "Created and maintained several C#/ASP.NET applications used by metallurgists and lab technicians."
     }
   ]
   , projects = Nothing
   , aboutMe = Nothing
   , links = Nothing
  }

-- VIEW
view : Model -> Html Int
view model =
  div [ class "portfolio" ]
    [ div [ class "logo" ] []
    , ul [ class "navigation" ]
      (List.indexedMap (\i -> \n -> li [] [ span [ class "nav-link", ( onClick i ) ] [text n.title ] ]) (toList model.pages))
    , span [] [render (Array.get model.activePage model.pages)]
    ]
