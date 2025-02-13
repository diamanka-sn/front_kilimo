import { AfterViewInit, Component, OnInit } from '@angular/core';
import { initDrawers, initFlowbite } from 'flowbite';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, Subject, takeUntil, tap } from 'rxjs';
import { ModelService } from '../../../../core/services/model.service';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, AfterViewInit {
  isLoggedIn!: boolean;
  private unsubscribe$ = new Subject<void>();
  recommendation: any;
  isLoading: boolean = false;

  form: FormGroup = new FormGroup({
    N: new FormControl('', [Validators.required]),
    P: new FormControl('', [Validators.required]),
    K: new FormControl('', [Validators.required]),
    humidity: new FormControl('', [Validators.required]),
    ph: new FormControl('', [Validators.required]),
    temperature: new FormControl('', [Validators.required]),
    rainfall: new FormControl('', [Validators.required]),
  });
  constructor(private router: Router, private modelService: ModelService) {}

  ngOnInit() {
    initFlowbite();
    // this.email.valueChanges.pipe(delay(2300), tap(console.log)).subscribe();
  }

  get n() {
    return this.form?.get('n') as FormControl;
  }

  get p() {
    return this.form?.get('p') as FormControl;
  }

  get k() {
    return this.form?.get('k') as FormControl;
  }

  get humidity() {
    return this.form?.get('humidity') as FormControl;
  }

  get ph() {
    return this.form?.get('ph') as FormControl;
  }

  get temp() {
    return this.form?.get('temperature') as FormControl;
  }

  get rainfall() {
    return this.form?.get('rainfall') as FormControl;
  }

  onSubmit() {
    if (this.form.valid) {
      //  let data = {
      //     N: this.n.value,
      //     P: this.p.value,
      //     K: this.k.value,
      //     temperature: this.temp.value,
      //     humidity: this.humidity.value,
      //     ph: this.ph.value,
      //     rainfall: this.rainfall.value,
      //   }
      this.isLoading = true;
      this.modelService
        .create_model('recommend', this.form.value)
        .subscribe( {
          next: (res) => {
            this.recommendation = res;
            console.log(this.recommendation);
          },
          error: (err) => {
            console.error('Erreur lors de la requête :', err);
          },
          complete: () => {
            this.isLoading = false; 
          }
        });
    }
  }

  conseil(){
    console.log(this.recommendation?.recommendation)
    this.modelService.create_model('advise-gpt4', {culture:this.recommendation?.recommendation}).subscribe(
      res=>console.log(res),
    )
  }
  ngAfterViewInit(): void {
    initFlowbite();
    initDrawers()
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
