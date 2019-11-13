import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LanguageTranslationModule } from "./shared/modules/language-translation/language-translation.module";
import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./shared";
import { HttpClientService } from "./shared/services/http.service";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    LanguageTranslationModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [AuthGuard, HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule {}
