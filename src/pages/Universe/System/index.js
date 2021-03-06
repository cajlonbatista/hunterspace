import React from "react";

import { Link } from "react-router-dom";
import { MeteorRainLoading } from "react-loadingg";

import CardNavigation from "../../../components/NavGrid/CardNavigation";
import { Helmet } from 'react-helmet';

import api from "../../../utils/axios";
import { Loading } from "../../../utils/styles/general";
import { PageHeader, HeaderTitle, DialogContent, PlanetGrid } from "./styles";
import { Dialog } from "@material-ui/core";

export default class System extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      planets: [],
      activePlanet: "",
    };
  }

  componentDidMount() {
    api
      .get("/planets")
      .then(({ data }) => this.setState({ planets: data }))
      .catch(console.error)
      .finally(() => this.setState({ loading: false }));
  }

  onCloseDrawer() {
    this.setState({ activePlanet: "" });
  }

  onShowDrawer(planet) {
    this.setState({ activePlanet: planet });
  }

  render() {
    const { planets, loading } = this.state;

    return loading ? (
      <Loading>
        <MeteorRainLoading color='#FFB400'/>
      </Loading>
    ) : (
        <div>
          <Helmet>
            <title>Solar System | Space Hunter</title>
          </Helmet>
          <PageHeader>
            <svg viewBox="0 0 384 384" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m64 368c0-70.695312 57.304688-128 128-128s128 57.304688 128 128"
                fill="transparent"
              />
              <path d="m320 88-32 48 32 48h-96v-96zm0 0" fill="transparent" />
              <path
                d="m203.761719 240.558594c32.878906 2.960937 62.160156 18.402344 83.199219 41.519531-4.640626 21.683594-23.921876 37.921875-46.960938 37.921875-26.480469 0-48-21.519531-48-48 0-12.078125 4.398438-23.039062 11.761719-31.441406zm0 0"
                fill="transparent"
              />
              <path d="m224 88v48h-96v-96h96zm0 0" fill="transparent" />
              <path
                d="m125.039062 258.878906c11.199219 4.882813 18.960938 16.082032 18.960938 29.121094 0 17.679688-14.320312 32-32 32-13.039062 0-24.238281-7.761719-29.121094-18.960938 10.5625-17.117187 25.042969-31.597656 42.160156-42.160156zm0 0"
                fill="transparent"
              />
              <path
                d="m368 352h-32.984375c-3.328125-29.871094-15.824219-58.0625-36.214844-80.6875-.066406-.074219-.144531-.136719-.214843-.214844-.089844-.097656-.1875-.1875-.273438-.273437-24.3125-26.464844-57.167969-42.832031-92.433594-46.121094-.070312-.007813-.136718-.023437-.207031-.03125-.078125-.007813-.152344-.023437-.230469-.03125-4.136718-.433594-8.539062-.640625-13.441406-.640625-16.457031 0-32.671875 2.816406-48 8.230469v-80.230469h64v32c0 8.832031 7.167969 16 16 16h96c5.894531 0 11.320312-3.246094 14.113281-8.457031 2.78125-5.199219 2.480469-11.511719-.800781-16.421875l-26.089844-39.121094 26.089844-39.128906c3.273438-4.902344 3.574219-11.214844.800781-16.421875-2.792969-5.203125-8.21875-8.449219-14.113281-8.449219h-80v-32c0-8.832031-7.167969-16-16-16h-80v-8c0-8.832031-7.167969-16-16-16s-16 7.167969-16 16v232.519531c-17.113281 11.511719-31.894531 26.550781-42.734375 44.121094v.007813c0 .007812-.007813.007812-.019531.015624-11.101563 18.054688-17.941406 38.328126-20.277344 59.335938h-32.96875c-8.832031 0-16 7.167969-16 16s7.167969 16 16 16h80c8.832031 0 16-7.167969 16-16s-7.167969-16-16-16h-14.839844c1.136719-7.894531 3.121094-15.632812 5.894532-23.078125 7.359374 4.492187 15.921874 7.078125 24.945312 7.078125 26.472656 0 48-21.527344 48-48 0-9.023438-2.585938-17.585938-7.078125-24.945312 8.03125-2.984376 16.390625-5.039063 24.933594-6.125-1.191407 4.894531-1.855469 9.941406-1.855469 15.070312 0 35.289062 28.710938 64 64 64 19.496094 0 37.390625-9.007812 49.289062-23.328125 6.894532 12.152344 11.445313 25.464844 13.445313 39.328125h-142.734375c-8.832031 0-16 7.167969-16 16s7.167969 16 16 16h208c8.832031 0 16-7.167969 16-16s-7.167969-16-16-16zm-93.3125-207.128906 15.417969 23.128906h-50.105469v-64h50.105469l-15.417969 23.128906c-3.582031 5.375-3.582031 12.375 0 17.742188zm-66.6875-56.871094v32h-64v-64h64zm-96 216c-3.550781 0-6.902344-1.167969-9.601562-3.199219 6.378906-8.457031 13.945312-16.023437 22.402343-22.394531 2.03125 2.691406 3.199219 6.042969 3.199219 9.59375 0 8.824219-7.175781 16-16 16zm128 0c-17.648438 0-32-14.351562-32-32 0-5.105469 1.246094-9.886719 3.449219-14.246094 21.367187 3.71875 41.152343 13.597656 57.09375 28.484375-5.335938 10.601563-16.269531 17.761719-28.542969 17.761719zm0 0"
                fill="#ffb400"
              />
            </svg>
            <HeaderTitle>Come travel through the solar system</HeaderTitle>
          </PageHeader>

          <PlanetGrid>
            {planets.map(({ planet, icon, drawer: drawerArr }, i) => {
              const { activePlanet } = this.state;
              const [drawer] = drawerArr;

              return (
                <span key={i} style={{ textTransform: "capitalize" }}>
                  <CardNavigation
                    title={planet}
                    image={icon}
                    onClick={() => this.onShowDrawer(planet)}
                  />
                  <Dialog
                    style={{ textTransform: "capitalize" }}
                    title={planet}
                    onClose={() => this.onCloseDrawer()}
                    open={activePlanet === planet}
                    fullScreen
                  >
                    <DialogContent>
                      <figure>
                        <img src={drawer.imgDrawer} alt={planet} />
                        <figcaption>{drawer.descriptionDrawer}</figcaption>
                      </figure>
                      <section>
                        <article>
                          <div>
                            <strong>Day duration:</strong> {drawer.dayDuration}
                          </div>
                          <div>
                            <strong>Orbital period:</strong> {drawer.orbitalPeriod}
                          </div>
                          <div>
                            <strong>Radius:</strong> {drawer.radius}
                          </div>
                          <div>
                            <strong>Gravity: </strong>
                            {drawer.gravity}
                          </div>
                          <div>
                            <strong>Mass: </strong>
                            {drawer.mass}
                          </div>
                          <div>
                            <strong>Planet Type:</strong> {drawer.type}
                          </div>
                        </article>
                        <Link to={`/universe/solarsystem/${planet}`}>
                          Travel
                      </Link>
                      </section>
                    </DialogContent>
                  </Dialog >
                </span >
              );
            })
            }
          </PlanetGrid >
        </div >
      );
  }
}
