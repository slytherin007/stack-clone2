import React from 'react'

const WidgetTags = () => {
    
    const tags = ['C', 'Tailwind', 'Firebase','Javascript','MERN','Mongodb','MySQL','Next.js','Node.js','PHP','Python','Reactjs','DeepLearning']

    return (
        <div className='widget-tags'>
            <h4>Watched tags</h4>
            <div className='widget-tags-div'>
                {
                    tags.map((tag) => (
                        <p key={tag}>{tag}</p>
                    ))
                }
            </div>
        </div>
  )
}

export default WidgetTags