const FilterButton = (props) => {
    return (
        <button type="button" className="btn toggle-btn btn-info m-2" aria-pressed="true">
            <span className="visually-hidden">Show </span>
            <span>all</span>
            <span className="visually-hidden"> tasks</span>
        </button>
    );

}

export default FilterButton;