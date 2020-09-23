import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { PuzzleContext } from "./PuzzleProvider"
import { BrandContext } from "../brand/BrandProvider"
import { StatusContext } from "../status/StatusProvider"
import { Puzzle } from "./Puzzle";
import "./Puzzle.css"


export const PuzzleList = (props) => {
    const { puzzles, getPuzzles } = useContext(PuzzleContext)
    const { getBrands } = useContext(BrandContext)
    const { getStatuses } = useContext(StatusContext)

    // const [ filteredPuzzles, setFiltered ] = useState([])
    
    const activeId = parseInt(localStorage.getItem("app_user"))
    const puzzlesActiveUser = 
        puzzles.filter(p => p.userId === activeId)
        .sort((a,b) => (a.statusId > b.statusId) ? 1 : -1)


    useEffect(() => {
        console.log("PuzzleList: Initial render before data")
        getPuzzles()
        getBrands()
        getStatuses()
    }, [])


    // useEffect(() => {
    //     const subset = puzzles.filter(p => p.brand.toLowerCase().includes(searchTerms.toLowerCase()))
    //     setFiltered(subset)
    // }, [searchTerms])


    // useEffect(() => {
    //     setFiltered(puzzles)
    // }, [puzzles])
    
    
    return (
        <>
            
            <div className="puzzleList">
            <h2>My Collection</h2>
            
                {
                puzzlesActiveUser.map(p => {
                    return (
                        <article key={p.id}>

                            <Link className="link__toPuzzleDetails" 
                                to={{
                                    pathname: `/puzzles/${p.id}`,
                                    state: { chosenPuzzle: p }
                                }}
                            >
                                <Puzzle puzzle={p} />
                                <br></br>

                            </Link>

                        </article>   
                    )
                })}

            </div> 


            <button className="btn btn--primary" id="btnAddPuzzle"
                onClick={() => {props.history.push("/puzzles/create")}}
            >
            +
            </button>  
        
        </>
    )

}