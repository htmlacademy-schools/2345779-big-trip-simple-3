import PointView from '../view/RoutePointView.js';
import RedactionView from '../view/RedactionFormView.js';
import SortingView from '../view/SortView.js';
import TripEventsView from '../view/EventListView.js';
import {render, replace} from '../framework/render.js';
import EmptyListView from '../view/EmptyListView.js';

export default class Presenter {

  #pointsListComponent = new TripEventsView();
  #sortingComponent = new SortingView();
  #emptyListComponent = new EmptyListView();
  #container = null;
  #tripModel = null;
  #pointsList = [];

  constructor(container, tripModel) {
    this.#container = container;
    this.#tripModel = tripModel;
  }

  init() {

    this.#pointsList = this.#tripModel.points;

    this.#renderPage();
  }

  #renderPoint(point) {
    const pointComponent = new PointView(point);
    const editPointComponent = new RedactionView(point);

    const replacePointWithForm = () => {
      replace(editPointComponent.element, pointComponent.element);
    };

    const replaceFormWithPoint = () => {
      replace(pointComponent.element, editPointComponent.element);
    };

    const closeFormOnEscape = (evt) => {
      if(evt.keyCode === 27) {
        evt.preventDefault();
        replaceFormWithPoint();
        document.removeEventListener('keydown', closeFormOnEscape());
      }
    };

    pointComponent.setClickHandler (() => {
      replacePointWithForm();
      document.addEventListener('keydown', closeFormOnEscape);
    });

    editPointComponent.setSubmitHandler(() => {
      replaceFormWithPoint();
      document.removeEventListener('keydown', closeFormOnEscape);
    });

    editPointComponent.setClickHandler(() => {
      replaceFormWithPoint();
      document.removeEventListener('keydown', closeFormOnEscape);
    });

    render(pointComponent, this.#pointsListComponent.element);
  }

  #renderEmptyList() {
    render(new this.#emptyListComponent, this.#container);
  }

  #renderSort() {
    render(this.#sortingComponent, this.#container);
  }

  #renderPage() {
    this.#renderSort();
    render(this.#pointsListComponent, this.#container);
    if(this.#pointsList.length === 0) {
      this.#renderEmptyList();
    } else {
      for (let i = 0; i < this.#pointsList.length; i++) {
        this.#renderPoint(this.#pointsList[i]);
      }
    }

  }

}
