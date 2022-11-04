import React, {ChangeEvent, ChangeEventHandler, useEffect, useState} from "react";

const ProfileStatus: React.FC<Props> = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => setStatus(props.status), [props.status])

    const activateEditMode = () => setEditMode(true)

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)

    return (
        <div>
            {editMode ?
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                           value={status}></input>
                </div> :
                <div>
                    <span onDoubleClick={activateEditMode}><b>status</b> : {status}</span>
                </div>

            }
        </div>
    )

}

export default ProfileStatus

type Props = {
    status : string
    updateStatus: (status: string) => void
}