import { useState, useEffect, useRef } from "react";
import PhotoCardSection from "./__PhotoCardSection/PhotoCardSection";

function Services(props) {
    const service = props.data.services;

    //Dynamically rendering an array of all images by collecting them from each category.

    //Assigned a variable to prevent memory overflow.
    let all = [];

    function collectAllImages(arr) {
        for (let i = 0; i < service.length; i++) {
            for (let n = 0; n < service[i].imageList.length; n++) {
                arr.push(service[i].imageList[n]);
            }
        }
        return arr;
    }

    //Now let's shuffle our array a bit so that the user can see when he switches to another section from "All"

    function shuffle(arr) {
        let random_value, temp_array;
        for (let i = arr.length - 1; i > 0; i--) {
            random_value = Math.floor(Math.random() * (i + 1));
            temp_array = arr[random_value];
            arr[random_value] = arr[i];
            arr[i] = temp_array;
        }
        return arr;
    }

    collectAllImages(all);
    shuffle(all);

    const [activeTab, setActiveTab] = useState(0); //Sets "All" as the default display option
    const handleActiveTab = (event) => {
        setActiveTab(event.target.id);
    };

    //This chunk of code is used to make the active button appear black on selection.

    const button = useRef(null);

    useEffect(() => {
        for (let i = 0; i < button.current.childElementCount; i++) {
            let inactive_button = button.current.children[i].children[0];
            inactive_button.className = "services__menu-btn";
        }
        let active_button = button.current.children[activeTab].children[0];
        active_button.className = "services__menu-btn services__menu-btn_active";
    }, [activeTab]);

    const service_type_list = service.map((item, index) => (
        <li className="services__menu-item" key={index}>
            <button id={index} className="services__menu-btn" onClick={handleActiveTab}>
                {item.name}
            </button>
        </li>
    ));

    return (
        <section className="services" id="services">
            <div className="services__container container">
                <h2 className="services__header header-secondary margin-reset">
                    Our professional services
                </h2>
                <ul ref={button} className="services__select-type u-list">
                    {service_type_list}
                </ul>
            </div>
            <PhotoCardSection
                title={service[activeTab].name}
                imageList={service[activeTab].imageList}
                allImages={all}
            />
        </section>
    );
}

export default Services;
