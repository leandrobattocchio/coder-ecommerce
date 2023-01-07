import React from 'react'
import { Link } from 'react-router-dom'
import './asideBar.css'

const AsideBar = () => {
  return (
    <div>
      <div className="aside-bar position-sticky pt-3 sidebar-sticky">
        <div className="nav-item">
          <div className="nav-link" href="/">
            <h5 className='display-6'>Géneros</h5>
          </div>
        </div>
        <ul className="nav flex-column">
          {/* accion */}
          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#accion-collapse" aria-expanded="false">
              ◉ Accion
            </button>
            <div className="collapse" id="accion-collapse">
              <ul className="colapsado btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Overview</a></li>
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Updates</a></li>
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Reports</a></li>
              </ul>
            </div>
          </li>
          {/* aventura */}
          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#aventura-collapse" aria-expanded="false">
              ◉ Aventura
            </button>
            <div className="collapse" id="aventura-collapse">
              <ul className="colapsado btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Overview</a></li>
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Updates</a></li>
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Reports</a></li>
              </ul>
            </div>
          </li>
          {/* Terror */}
          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#terror-collapse" aria-expanded="false">
              ◉ Terror
            </button>
            <div className="collapse" id="terror-collapse">
              <ul className="colapsado btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Overview</a></li>
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Updates</a></li>
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Reports</a></li>
              </ul>
            </div>
          </li>
          {/* Plataformas */}
          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#plataformas-collapse" aria-expanded="false">
              ◉ Plataformas
            </button>
            <div className="collapse" id="plataformas-collapse">
              <ul className="colapsado btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Overview</a></li>
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Updates</a></li>
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Reports</a></li>
              </ul>
            </div>
          </li>
          {/* Rol */}
          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#rol-collapse" aria-expanded="false">
              ◉ Rol
            </button>
            <div className="collapse" id="rol-collapse">
              <ul className="colapsado btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Overview</a></li>
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Updates</a></li>
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Reports</a></li>
              </ul>
            </div>
          </li>
          {/* Estrategia */}
          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#estrategia-collapse" aria-expanded="false">
              ◉ Estrategia
            </button>
            <div className="collapse" id="estrategia-collapse">
              <ul className="colapsado btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Overview</a></li>
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Updates</a></li>
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Reports</a></li>
              </ul>
            </div>
          </li>
          {/* Deportes y carreras */}
          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dyc-collapse" aria-expanded="false">
              ◉ Deportes
            </button>
            <div className="collapse" id="dyc-collapse">
              <ul className="colapsado btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Overview</a></li>
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Updates</a></li>
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Reports</a></li>
              </ul>
            </div>
          </li>
          {/* Simulacion */}
          <li className="mb-1">
            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#simulacion-collapse" aria-expanded="false">
              ◉ Simulacion
            </button>
            <div className="collapse" id="simulacion-collapse">
              <ul className="colapsado btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Overview</a></li>
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Updates</a></li>
                <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Reports</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default AsideBar