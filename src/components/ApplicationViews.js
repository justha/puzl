import React from "react"
import { Route } from "react-router-dom"
import { PuzzleProvider } from "./puzzle/PuzzleProvider"
import { BrandProvider } from "./brand/BrandProvider"
import { StatusProvider } from "./status/StatusProvider"
import { BoxProvider } from "./box/BoxProvider"
import { TextureProvider } from "./texture/TextureProvider"
import { DustProvider } from "./dust/DustProvider"
import { PuzzleForm } from "./puzzle/PuzzleForm"
import { PuzzleList } from "./puzzle/PuzzleList"
import { PuzzleDetail } from "./puzzle/PuzzleDetail"
import { Logout } from "./auth/Logout"

export const ApplicationViews = (props) => {
    return (
        <>
            <Route exact path="/">
                Welcome!
            </Route>
        

            {/* <PuzzleProvider>
                <StatusProvider>
                        <BrandProvider>

                            <Route exact path="/puzzles" render={ 
                                props => <PuzzleList {...props}/>
                            } />

                            <Route path="/puzzles/:puzzleId(\d+)" render={
                                props => <PuzzleDetail {...props}/>
                            } /> 

                        </BrandProvider>
                </StatusProvider>
            </PuzzleProvider> */}


            <PuzzleProvider>
                <BrandProvider>
                    <StatusProvider>
                        <BoxProvider>
                            <TextureProvider>
                                <DustProvider>

                                    <Route exact path="/puzzles" render={ 
                                        props => <PuzzleList {...props}/>
                                    } />

                                    <Route exact path="/puzzles/create" 
                                        render={props => 
                                            <PuzzleForm {...props} />
                                    } />

                                    <Route path="/puzzles/:puzzleId(\d+)" render={
                                        props => <PuzzleDetail {...props}/>
                                    } /> 

                                    <Route path="/puzzles/edit/:puzzleId(\d+)" render={
                                        props => <PuzzleForm {...props}/>
                                    } /> 
                                
                                </DustProvider>
                            </TextureProvider>
                        </BoxProvider>
                    </StatusProvider>
                </BrandProvider>
            </PuzzleProvider>


            <Route exact path="/spaces">
                Workspaces
            </Route>


            <Route exact path="/logout">
                <Logout />
            </Route>

        </>
    )
}