import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpModule} from '@angular/http';
import { PlantiqueService } from './services/plantique.service';
import { DatePipe } from '@angular/common';
import { ViewpostsComponent } from './viewposts/viewposts.component';
import { MainComponent } from './main/main.component'
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { FriendsComponent } from './friends/friends.component';
import {MatTableModule} from '@angular/material';
import { UserActionsComponent } from './user-actions/user-actions.component';
import {MatProgressSpinnerModule} from '@angular/material';
import { InfoComponent } from './info/info.component';
import { CartComponent } from './cart/cart.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { PostComponent } from './post/post.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { MyproductsComponent } from './myproducts/myproducts.component';
import {MatIconModule} from '@angular/material/icon';
import { OrdersComponent } from './orders/orders.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ViewpostsComponent,
    MainComponent,
    FriendsComponent,
    UserActionsComponent,
    InfoComponent,
    CartComponent,
    PostComponent,
    PurchaseComponent,
    MyproductsComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule, 
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatExpansionModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    HttpModule,
    MatIconModule,
    NavbarModule, WavesModule, ButtonsModule,
     RouterModule.forRoot([
      {path:'login',component:LoginComponent},
      {path:'',component:HomeComponent},
      {path:'signup',component:SignupComponent},
      {path:'posts',component:ViewpostsComponent},
      {path:'main',component:MainComponent},
      {path:'friend',component:FriendsComponent},
      {path:'actions',component:UserActionsComponent},
      {path:'purchase',component:PurchaseComponent},
      {path:'myproducts',component:MyproductsComponent}
    ])

  ],
  entryComponents: [
    CartComponent,
    OrdersComponent
],
  providers: [PlantiqueService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
