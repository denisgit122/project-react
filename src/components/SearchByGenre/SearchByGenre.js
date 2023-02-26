import css from './searchGenre.module.css'


const SearchByGenre = ({mov,defaultValue,value,onChange}) => {

    return (
  <div >
      <select
          className={css.boxSelector}
          value={value}
          onChange={event => onChange(event.target.value)}
          // onChange={}
          >
          <option value={''}>{defaultValue}</option>
              <option className={css.option}  value="28">Action</option>
              <option value="12">Adventure</option>
              <option value="16">Animation</option>
              <option value="35">Comedy</option>
              <option value="80">Crime</option>
              <option value="99">Documentary</option>
              <option value="18">Drama</option>
              <option value="10751">Family</option>



      </select>
  </div>
);
};

export {SearchByGenre};