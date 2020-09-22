import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { RelationshipContext } from "./RelationshipProvider"
import { SpaceContext } from "../space/SpaceProvider"
import { Relationship } from "./Relationship"


export const RelationshipList = (props) => {
    const {relationships, getRelationships} = useContext(RelationshipContext)
    const {getSpaces} = useContext(SpaceContext)

    const activeId = parseInt(localStorage.getItem("app_user"))
    
    const relationshipsActiveUser = 
        relationships.filter(r => r.userId === activeId)
        .sort((a,b) => (a.spaceId > b.spaceId) ? 1 : -1)
    

    useEffect(() => {
        getRelationships()
        getSpaces()        
    }, [])


    return (
        <>

            <div className="relationshipList">
            <h2>My Workspaces</h2>

                {
                    relationshipsActiveUser.map(r => {
                        return (
                            <article key={r.id}>
                                <Link 
                                    className="link__toRelationshipDetails"
                                    to={{
                                        pathname: `/relationships/${r.id}`,
                                        state: {chosenRelationship: r }
                                    }}
                                >
                                    <Relationship relationship={r} />
                                    <br></br>
                                </Link>

                            </article>
                        )
                    })
                }
                
            </div>


            {/* button routes to  */}
            <button className="btn btn--primary" id="btnAddSpace"
                onClick={() => {props.history.push("/relationships/create")}}
            >
            +
            </button> 

            
        </>
    )




}