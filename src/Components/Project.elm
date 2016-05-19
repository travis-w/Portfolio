module Components.Project exposing (..)

{- Imports -}
import Html exposing (..)
import Html.Events exposing (..)
import Html.Attributes exposing (..)

import Components.Link exposing (..)
import Components.Panel exposing (..)

type alias Project =
  { title : String
  , description : String
  , tools : List String
  , links : List Link
  }

renderProject : Project -> Html msg
renderProject p =
  panel p.title
  [ text p.description
  , ul [ class "project-links" ]
    (List.map renderLink p.links)
  ]
