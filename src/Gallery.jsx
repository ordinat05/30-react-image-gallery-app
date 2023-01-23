import React, { useState } from 'react'
import Images from './images'
import "./Gallery.css"
import { FaWindowClose } from 'react-icons/fa';

function Gallery() {

	const [model, setModel] = useState(false);
	const [tempimgSrc, setTempimgSrc] = useState("")

	const getImg = (imgSrc) => {
		setTempimgSrc(imgSrc)
		setModel(true)
	}

	return (
		<>
			<div className={model ? "model open " : "model"}>
				<img src={tempimgSrc} />
				<FaWindowClose onClick={() => setModel(false)} className="x" />
			</div>
			<div className="gallery">
				Bu Component Gallery.jsx
				{Images.map((item, index) => {
					return (
						<div className='pics' key={index}>
							<img src={item.image} style={{ width: "100%" }} onClick={() => getImg(item.image)} />
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Gallery