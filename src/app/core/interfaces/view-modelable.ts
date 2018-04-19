export interface ViewModelable<T extends __esri.Accessor> {
  viewModel: T;
  get(): any;
}
