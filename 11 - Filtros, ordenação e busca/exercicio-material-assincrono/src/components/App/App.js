import React, { useState } from "react"
import { Header } from "../Header";
import { Card } from "../Card";
import { ListContainer } from "./style";

//lista de dados para utilizar
import jobList from "../../data/jobs.json"
import { Filters } from "../Filters";

export function App() {

  const [jobs] = useState(jobList)
  const [query, setQuery] = useState("")
  const [minPrice, setMinPrice] = useState(-Infinity)
  const [maxPrice, setMaxPrice] = useState(Infinity)
  const [sortingParameter, setSortingParameter] = useState("title")
  const [order, setOrder] = useState("asc")

  return <>
    <Header />

    <Filters
      query={query}
      minPrice={minPrice}
      maxPrice={maxPrice}
      sortingParameter={sortingParameter}
      order={order}
      setQuery={setQuery}
      setMinPrice={setMinPrice}
      setMaxPrice={setMaxPrice}
      setSortingParameter={setSortingParameter}
      setOrder={setOrder}
      
    />

    <ListContainer>
      {jobs
        .filter((job) => {
          return job.title.includes(query) || job.description.includes(query)
        })
        .filter((job) => {
          return job.price >= minPrice || minPrice === ""
        })
        .filter((job) => {
          return job.price <= maxPrice || maxPrice === ""
        })
        .sort((currentJob, nextJob) => {
          switch (sortingParameter) {
            case "price":
              return currentJob.price - nextJob.price
            case "dueDate":
              return new Date(currentJob.dueDate) - new Date(nextJob.dueDate)
              default:
                return currentJob.title.localeCompare(nextJob.title)
          }

        }
        )
        .sort(()=>{
          if(order === "asc"){
            return 0
          } else {
            return -1
          }
          return -1
        })
        .map(job => {
          return <Card key={job.id} job={job} />
        })}
    </ListContainer>
  </>
}


