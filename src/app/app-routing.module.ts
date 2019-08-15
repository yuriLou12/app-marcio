import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },

  { path: 'drama', loadChildren: './drama/drama.module#DramaPageModule' },
  { path: 'acao', loadChildren: './acao/acao.module#AcaoPageModule' },
  { path: 'aventura', loadChildren: './aventura/aventura.module#AventuraPageModule' },
  { path: 'comedia', loadChildren: './comedia/comedia.module#ComediaPageModule' },
  { path: 'documentario', loadChildren: './documentario/documentario.module#DocumentarioPageModule' },
  { path: 'ficcao', loadChildren: './ficcao/ficcao.module#FiccaoPageModule' },
  { path: 'series', loadChildren: './series/series.module#SeriesPageModule' },
  { path: 'suspense', loadChildren: './suspense/suspense.module#SuspensePageModule' },
  { path: 'terror', loadChildren: './terror/terror.module#TerrorPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
