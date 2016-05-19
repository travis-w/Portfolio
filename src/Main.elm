{- Imports -}
import Html exposing (..)
import Html.App as Html
import Html.Events exposing (..)
import Html.Attributes exposing (..)
import Array exposing (..)

import Components.Navigation as Navigation exposing (..)
import Components.Page exposing (..)

-- Import Data
import Components.Data exposing (..)

-- Type Alias for Page
type alias Model =
  { pages : Array Page
  , activePage : Int
  }

initModel : Model
initModel =
  { pages = fromList [pageProjects, pageExperience, pageSocial, pageAbout]
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

-- VIEW
view : Model -> Html Int
view model =
  div [ class "portfolio" ]
    [ div [ class "logo" ] []
    , ul [ class "navigation" ]
      (List.indexedMap (\i -> \n -> li [] [ span [ class "nav-link", ( onClick i ) ] [text n.title ] ]) (toList model.pages))
    , span [] [render (Array.get model.activePage model.pages)]
    ]
