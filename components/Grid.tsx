import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'


const Grid = () => {
  return (
    <section
      id="about"
      aria-label="Sobre mí"
      style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
    >
        <h2 className="heading mb-8">
          Sobre{" "}
          <span className="text-purple">mí</span>
        </h2>
        <BentoGrid>
            {gridItems.map(({id,title, description, className, img, imgClassName, titleClassName, spareImg})=>(
                <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
                />
            ))}
        </BentoGrid>
        

    </section>
  )
}

export default Grid