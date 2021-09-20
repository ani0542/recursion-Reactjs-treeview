import React, { useCallback, useState } from 'react'

function File({ id, children }) {

    const [showChildren, setShowChildren] = useState(false);

    const handleClick = useCallback(() => {
      setShowChildren(!showChildren);
    }, [showChildren, setShowChildren])


    return (
        <>
               <div>
                    <span onClick={handleClick}>
                        <h4 style={{ fontWeight: showChildren ? 'bold' : 'normal' }}>{id}</h4>
                    </span>
                    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', left: 25, borderLeft: '1px solid', paddingLeft: 15 }}>
                        {showChildren && (children ?? []).map((node) => <File {...node}/>)}
                    </div>
              </div>
        </>
    )
}

export default File
