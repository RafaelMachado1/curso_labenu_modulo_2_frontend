import { FiltersContainer } from "./style"

export function Filters(props) {
   return <FiltersContainer>
      <input
         placeholder="Pesquisa"
         value={props.query}
         onChange={(event) => { props.setQuery(event.target.value) }}
      />

      <input
         placeholder="Preço mínimo"
         type="number"
         value={props.minPrice}
         onChange={(event) => { props.setMinPrice(event.target.value) }}
      />

      <input
         placeholder="Preço máximo"
         type="number"
         value={props.maxPrice}
         onChange={(event) => { props.setMaxPrice(event.target.value) }}
      />
      <span>
         <label for="sortingParameter">Ordenar por:</label>
         <select
            name="sortingParameter"
            value={props.sortingParameter}
            onChange={event => { props.setSortingParameter (event.target.value) }}
         >
            <option value={"title"}>Título</option>
            <option value={"price"}>Preço</option>
            <option value={"dueDate"}>Prazo</option>
         </select>

         <select
          
            value={props.order}
            onChange={event => { props.setOrder (event.target.value) }}
         >
            <option value={"asc"}>Crescente</option>
            <option value={"desc"}>Decrescente</option>
            
         </select>



      </span>
   </FiltersContainer>
}