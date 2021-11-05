import React, { useEffect, useState } from 'react'
import { getAbout, getNoticias } from "../../../pages/api/aboutSuzuki";

function Content() {
	const [content, setContent] = useState([]);
	const [news, setNews] = useState([]);
	const [limit, setLimit] = useState(2);
	const [start, setStart] = useState(0);
	const [newsComplete, setNewsComplete] = useState([]);
	useEffect(()=>{
		(async () => {
			const res = await getAbout();
			const res_ordenado = res?.sort(function (a, b) {
				if (a.orden > b.orden) {
					return 1;
				}
				if (a.orden < b.orden) {
					return -1;
				}
				return 0;
			})
			setContent(res_ordenado);
		})();
	},[]);

	useEffect(() => {
		(async () => {
			const res_news = await getNoticias(start);
			let aux_news = Object.assign(news, res_news);
			setNewsComplete(aux_news);
			let news_res = aux_news.slice(0, limit);
			//let vec = (...news, ...news)
			console.log(news_res);
			setNews(news_res);
		})();
	},[start]);

	const handleClick = async () => {
		//document.getElementById("features-model").scrollIntoView({ behavior: "smooth" });
		let aux_limit = limit + 2;
		if (aux_limit <= newsComplete.length) {
			let news = newsComplete.slice(0,aux_limit);
			//console.log(news);
			setLimit(aux_limit);
			setNews(news);
		}else{
			let pos = newsComplete.length - 1;
			setLimit(aux_limit);
			setStart(pos);
		}
	}
	const Izquierda = (props) => {
		return (
			<div key={`izq-${props.new.id}`} className="row p-bottom">
				{props.new.imagen &&
					<div className="col-12 col-md-6 pl-0 pr-0 pr-md-3">
						<img src={props.new.imagen.url} className="w-100 img-fluid"></img>
					</div>
				}
				<div className="col-12 col-md-6 d-flex flex-column pl-3 my-auto ">
					<div className=" titulo" dangerouslySetInnerHTML={{ __html: props.new.titulo }}></div>
					<div className=" col-12 col-md-11">
						<div className=" texto texto-blue" dangerouslySetInnerHTML={{ __html: props.new.subtitulo }}></div>
						<div className=" texto pt-4 " dangerouslySetInnerHTML={{ __html: props.new.texto }}></div>
					</div>
				</div>
			</div>
		)
	}
	const Derecha = (props) => {
		return (
			<div key={`der-${props.new.id}`} className="row p-bottom ">
				<div className="col-12 col-md-6 d-flex flex-column  my-auto pl-md-5 ">
					<div className=" titulo" dangerouslySetInnerHTML={{ __html: props.new.titulo }}></div>
					<div className="col-12 pl-md-0 ">
						<div className=" texto texto-blue " dangerouslySetInnerHTML={{ __html: props.new.subtitulo }}></div>
						<div className=" texto pt-4 pr-3" dangerouslySetInnerHTML={{ __html: props.new.texto }}></div>
					</div>
				</div>
				{props.new.imagen &&
					<div className="col-12 col-md-6 pr-md-0 px-0">
						<img src={props.new.imagen.url} className="w-100 img-fluid"></img>
					</div>
				}
			</div>
		)
	}
	const Centro = (props) => {
		return (
			<div key={`cent-${props?.new?.id}`} id={`cent-${props?.new?.id}`} className="container ">
				<div className="row p-bottom">
					<div className="col-12 text-center ">
						<div className=" texto  subtitulo py-5" dangerouslySetInnerHTML={{ __html: props.new.titulo }}></div>
					</div>
					{
						props?.new?.imagen &&
						<div className=" col-12 p-x ">
							<img src={props?.new?.imagen?.url} className="w-100 img-fluid size-img-new " ></img>
						</div>
					}
					<div className="col-12 p-x">
						<div className=" texto texto-blue pt-5 " dangerouslySetInnerHTML={{ __html: props.new?.subtitulo ?? '' }}></div>
						<div className=" texto  " dangerouslySetInnerHTML={{ __html: props?.new?.texto ?? '' }}></div>
					</div>
				</div>
			</div>
		)

	}

	return (
		<div className="about-suzuki">
			<div className="container-fluid ">

				{
					content.length > 0 &&
					content.map((item) => {
						if (item.estilo === "izquierda") {
							return <Izquierda new={item} />
						} else {
							return item.estilo === "derecha" && <Derecha new={item} />
						}
					}
					)
				}
			</div>
			{
				news.length > 0 &&
				<div className="container-fluid color-cream  mt-5 ">
					<div className="row align-items-center p-top ">
						<div className=" pl-5 titulo col-7" >
							<p>Noticias y Eventos</p>
						</div>
						<div className="line col-5 " />
					</div>

					{
						news.length > 0 &&
						news.map((item) => {
							return <Centro new={item} />
						}
						)
					}
					<div className="pb-5 ">
						<center>
							<button
								className="btn btn-primary"
								onClick={handleClick}
							>
								Ver más noticias
							</button>
						</center>
					</div>
				</div>
			}

		</div>
	)
}

export default Content

