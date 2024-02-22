export const DInput = ({label, topRightLabel, bottomLeftLabel, bottomeRightLabel, value, changeVal}) => {

    return (
    <label className="form-control w-full max-w-xs">
        <div className="label">
            {label && (<span className="label-text">{label}</span>)}
            {topRightLabel && (<span className="label-text-alt">{topRightLabel}</span>)}
        </div>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={value} onChange={e =>{
            changeVal(e.target.value)}}/>
        <div className="label">
            {bottomLeftLabel && (<span className="label-text-alt">{bottomLeftLabel}</span>)}
            {bottomeRightLabel && (<span className="label-text-alt">{bottomeRightLabel}</span>)}
        </div>
    </label>
    )
}