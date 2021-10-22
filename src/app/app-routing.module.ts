import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'beneficios',
    loadChildren: () => import('./beneficios/beneficios.module').then( m => m.BeneficiosPageModule)
  },
  {
    path: 'descarga',
    loadChildren: () => import('./descarga/descarga.module').then( m => m.DescargaPageModule)
  },
  {
    path: 'bitcoin',
    loadChildren: () => import('./bitcoin/bitcoin.module').then( m => m.BitcoinPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
