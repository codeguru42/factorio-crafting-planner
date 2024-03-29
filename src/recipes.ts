import { EdgeDefinition, ElementsDefinition, NodeDefinition } from 'cytoscape'

const recipes = {
  "wood": [],
  "coal": [],
  "iron ore": [],
  "copper ore": [],
  "iron plate": [],
  "copper plate": [],
  "stone": [],
  "stone brick": [],
  "steel plate": [],
  "water": [],
  "iron gear wheel": ["iron plate"],
  "copper cable": ["copper plate"],
  "electronic circuit": ["iron plate", "copper cable"],
  "iron stick": ["iron plate"],
  "automation science pack": ["copper plate", "iron gear wheel"],
  "logistic science pack": ["transport belt", "inserter"],
  "boiler": ["pipe", "stone furnace"],
  "steam engine": ["iron plate", "iron gear wheel", "pipe"],
  "electric mining drill": ["iron plate", "iron gear wheel", "electronic circuit"],
  "offshore pump": ["iron gear wheel", "electronic circuit", "pipe"],
  "stone furnace": ["stone"],
  "steel furnace": ["steel plate", "stone brick"],
  "steel chest": ["steel plate"],
  "transport belt": ["iron plate", "iron gear wheel"],
  "fast transport belt": ["iron gear wheel", "transport belt"],
  "underground belt": ["iron plate", "transport belt"],
  "fast underground belt": ["iron gear wheel", "underground belt"],
  "splitter": ["iron plate", "electronic circuit", "transport belt"],
  "fast splitter": ["iron gear wheel", "electronic circuit", "splitter"],
  "burner inserter": ["iron plate", "iron gear wheel"],
  "burner mining drill": ["iron plate", "iron gear wheel", "stone furnace"],
  "inserter": ["iron plate", "iron gear wheel", "electronic circuit"],
  "long-handled inserter": ["iron plate", "iron gear wheel", "inserter"],
  "fast inserter": ["iron plate", "electronic circuit", "inserter"],
  "filter inserter": ["electronic circuit", "fast inserter"],
  "small electric pole": ["wood", "copper cable"],
  "medium electric pole": ["copper plate", "steel plate", "iron stick"],
  "big electric pole": ["copper plate", "steel plate", "iron stick"],
  "pipe": ["iron plate"],
  "pipe to ground": ["iron plate", "pipe"],
  "lamp": ["iron plate", "copper cable", "electronic circuit"],
  "concrete": ["iron ore", "stone brick", "water"],
  "hazard concrete": ["concrete"],
  "refined concrete": ["steel plate", "iron stick", "concrete", "water"],
  "refined hazard concrete": ["refined concrete"],
  "firearm magazine": ["iron plate"],
  "piercing rounds magazine": ["copper plate", "steel plate", "firearm magazine"],
  "shotgun shell": ["iron plate", "copper plate"],
  "grenade": ["coal", "iron plate"],
  "wall": ["stone brick"],
  "gate": ["steel plate", "electronic circuit", "wall"],
  "gun turret": ["iron plate", "copper plate", "iron gear wheel"],
  "radar": ["iron plate", "iron gear wheel", "electronic circuit"]
}

type Recipes = typeof recipes
type RecipesKey = keyof Recipes

const nodes: NodeDefinition[] = Object.keys(recipes).map((item: string): NodeDefinition => {
  return {data: {id: item}}
})

const edges: EdgeDefinition[][] = Object.keys(recipes).map((item: string): EdgeDefinition[] => {
  return recipes[item as RecipesKey].map((ingredient: string) => {
    return {data: {source: ingredient, target: item}}
  })
})

const elements: ElementsDefinition = {nodes, edges: edges.flat(),}

export default elements
