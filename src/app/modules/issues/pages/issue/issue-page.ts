import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, tap } from 'rxjs';
import { IssueService } from '../../services/issue.service';
import { IssueComment } from '../../components/issue-comment/issue-comment';

@Component({
  selector: 'app-issue-page',
  imports: [RouterLink, IssueComment],
  templateUrl: './issue-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IssuePage {
  route = inject(ActivatedRoute);
  issueSvc = inject(IssueService);

  issueNumber = toSignal<string>(
    this.route.paramMap.pipe(
      map((params) => params.get('number') ?? ''),
      tap((number) => this.issueSvc.setIssueNumber(number)),
    ),
  );

  issueQuery = this.issueSvc.issueQuery;

  issueCommentsQuery = this.issueSvc.issueCommentsQuery;
}
